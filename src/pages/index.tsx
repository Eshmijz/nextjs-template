import type { GetServerSideProps, NextPage } from 'next'
import { useCounter } from "../store/Counter"
import { Button } from "@/components/Button"
import { Header } from '@/components/Header'
import { User } from '@/types/User'

type Props = {
  user: User
}

const Home: NextPage<Props> = ({ user }) => {
  const { count, increment } = useCounter()

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Header user={user} />
      <h1 className="text-3xl">Hello World</h1>
      Count: {count}
      <Button label="add" handleClick={increment} />
    </div>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps = async (context) => {
  const user: User = await (await fetch("http://localhost:3000/api/user")).json()

  return {
    props: {
      user: JSON.parse(JSON.stringify(user))
    }
  }
}