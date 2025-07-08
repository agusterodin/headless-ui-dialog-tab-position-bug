'use client'

import { dialogVisibleAtom, DialogWithForm } from '@/components/DialogWithFom'
import ExampleForm from '@/components/ExampleForm'
import { useAtom } from 'jotai'

export default function Home() {
  const [isOpen, setIsOpen] = useAtom(dialogVisibleAtom)
  return (
    <main>
      <DialogWithForm />
      <ExampleForm />
    </main>
  )
}
