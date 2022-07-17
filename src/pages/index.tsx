import type { GetServerSideProps, NextPage } from 'next'
import { User } from '@/types/User'
import { Post } from '@/types/Post'
import { ScrollHeader } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CardList } from '@/components/Card/CardList'
import useSWR from "swr"
import { AnimatePresence, motion } from "framer-motion"

interface Props {
  user: User,
}


const Home: NextPage<Props> = ({ user }) => {
  async function fetcher(url: string): Promise<Post[] | null> {
    const response = await fetch(url);
    return response.json();
  }
  const { data: posts } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

  return (
    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.div className="min-h-screen"
        key="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ScrollHeader user={user} />

        <div className="min-h-screen flex flex-col justify-center items-center">
          <h1 className="text-3xl p-10">News</h1>
          <CardList items={posts ?? []} />
        </div>

        <Footer />
      </motion.div>
    </AnimatePresence>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const user: User = await (await fetch("http://localhost:3000/api/user")).json()

  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
    }
  }
}