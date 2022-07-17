import type { GetServerSideProps, NextPage } from 'next'
import { Post } from '@/types/Post'
import useSWR from "swr"
import { ComponentPropsWithRef } from 'react'
import { EyeIcon, LockOpenIcon, LoginIcon, ThumbDownIcon, ThumbUpIcon } from '@heroicons/react/solid'
import { Button } from '@/components/Button'
import Link from 'next/link'
import { AnimatePresence, motion } from "framer-motion"

interface Props {
  id: string
}

type BoxProps = ComponentPropsWithRef<"div"> & {
  children: React.ReactNode
}

const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <div
      className="flex bg-gray-200 rounded-xl p-4 mb-4"
      {...props}
    >
      {children}
    </div>
  )
}


const Home: NextPage<Props> = ({ id }) => {
  async function fetcher(url: string): Promise<Post | null> {
    const response = await fetch(url);
    return response.json();
  }
  const { data: post } = useSWR(`https://jsonplaceholder.typicode.com/posts/${id}`, fetcher);

  return (
    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.div className="flex flex-col lg:flex-row w-[90%] mx-auto p-4"
        key="note"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="fixed top-[50%] left-4"
          key="toList"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Link href="/">
            <a>
              <LoginIcon className="h-9 w-9 p-1 rounded-full hover:bg-gray-200" />
            </a>
          </Link>
        </motion.div>
        <div className="flex flex-col w-full bg-gray-200 rounded-xl lg:min-h-[90vh] lg:w-2/3 m-4">
          <div className="flex flex-col p-4 relative w-full">

            <h3 className="text-2xl font-bold w-full h-10 overflow-hidden text-ellipsis whitespace-nowrap">
              {post?.title}
            </h3>
            <p className="max-h-[70%] p-2">
              {post?.body}
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:min-h-[90vh] w-full lg:w-1/3 m-4">
          <Box>
            <div>
              <p>{"投稿日"}</p>
              <p>{"2022/07/18"}</p>
            </div>
          </Box>

          <Box>
            <div>
              <p>{"ユーザー"}</p>
              <p>{post?.userId}</p>
            </div>
          </Box>

          <Box>
            <div className="flex flex-col">
              <p className="inline-flex justify-start items-center">
                <EyeIcon className="h-9 w-9 p-2" />
                {"  "} {11301}</p>
              <div>
                <p className="inline-flex justify-start items-center">
                  <ThumbUpIcon className="h-9 w-9 p-2" />
                  {"  "} {881}</p>
                <p className="inline-flex justify-start items-center">
                  <ThumbDownIcon className="h-9 w-9 p-2" />
                  {"  "} {11}</p>
              </div>
              <p className="inline-flex justify-start items-center">
                <LockOpenIcon className="h-9 w-9 p-2" />
                {"  "} {"コメント受付中"}</p>
            </div>
          </Box>

          <Box className="flex flex-col">
            <div className="flex flex-col w-full bg-white rounded-xl p-2">
              <p>コメントする</p>
              <input className="outline-none border-none" />
            </div>
            <div>
              <Button label="send" handleClick={() => console.log("send")} />
            </div>
          </Box>
        </div>

      </motion.div>
    </AnimatePresence>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query

  return {
    props: {
      id: id
    }
  }
}