import type { GetServerSideProps, NextPage } from 'next'
import { User } from '@/types/User'
import { Post } from '@/types/Post'
import { ScrollHeader } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CardList } from '@/components/Card/CardList'
import useSWR from "swr"

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
    <div className="min-h-screen">
      <ScrollHeader user={user} />

      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl p-10">News</h1>
        <CardList items={posts ?? []} />
      </div>

      <Footer />
    </div>
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