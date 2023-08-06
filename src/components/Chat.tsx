'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useChat } from 'ai/react'
import { ScrollArea } from './ui/scroll-area'

export interface ChatProps {}

export function Chat(props: ChatProps) {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: 'api/chat',
  })

  return (
    <Card className="w-[440px] grid grid-rows-[min-content_1fr_min-content]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>
          Using Vercel SDK to create a chat bot.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className=" h-[600px] w-full pr-4">
          {messages.map((message) => {
            return (
              <div
                key={message.id}
                className="flex gap-3 text-slate-600 text-sm mb-4"
              >
                {message.role === 'user' && (
                  <Avatar>
                    <AvatarFallback>GR</AvatarFallback>
                    <AvatarImage src="https://github.com/guilherme-santos08.png" />
                  </Avatar>
                )}

                {message.role === 'assistant' && (
                  <Avatar>
                    <AvatarFallback>RS</AvatarFallback>
                    <AvatarImage src="https://github.com/rocketseat.png" />
                  </Avatar>
                )}
                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    {message.role === 'user' ? 'Usuário' : 'AI'}
                  </span>
                  {message.content}
                </p>
              </div>
            )
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="flex gap-2 w-full" onSubmit={handleSubmit}>
          <Input
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  )
}
