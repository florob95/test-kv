import { Head } from '$fresh/runtime.ts'
import { useSignal } from '@preact/signals'
import Counter from '../islands/Counter.tsx'

export default function Home() {
    const count = useSignal(3)
    return (
        <>
            <Head>
                <title>fresh + kv</title>
            </Head>
            <div class='px-4 py-8 mx-auto bg-[#ffd900]'>
                <div class='max-w-screen-md mx-auto flex flex-col items-center justify-center'>
                    <h1 class='text-4xl font-bold'>
                        Welcome to fresh + deploy +kv
                    </h1>
                    <Counter count={count} />
                </div>
            </div>
        </>
    )
}
