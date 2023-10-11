import Books from "./components/books"
import Menu from "./components/menu"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-5">
      <Menu />
      <Books />
    </main>
  )
}
