"use client"
// app/page.tsx or app/model/page.tsx
import dynamic from 'next/dynamic'

const ModelIntro = dynamic(() => import('../../components/ModelIntro'), { ssr: false })

export default function Home() {
  return <ModelIntro />
}