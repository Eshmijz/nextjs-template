import type { GetServerSideProps, NextPage } from 'next'
import { useCounter } from "../store/Counter"
import { Button } from "@/components/Button"
import { User } from '@/types/User'
import { ScrollHeader } from '@/components/Header'
import { Footer } from '@/components/Footer'

interface Props {
  user: User
}

const Home: NextPage<Props> = ({ user }) => {
  const { count, increment } = useCounter()

  return (
    <div className="min-h-screen">
      <ScrollHeader user={user} />

      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl">Hello World</h1>
        Count: {count}
        <Button label="add" handleClick={increment} />
        <div className="min-h-screen bg-gray-400"></div>
        <div className="min-h-screen bg-gray-400"></div>
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
      user: JSON.parse(JSON.stringify(user))
    }
  }
}