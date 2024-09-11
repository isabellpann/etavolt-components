"use client"
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  EtavoltForm,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  EtavoltField,
} from "@/components/ui/form/form"
import { Input } from "@/components/ui/form/input"

const formSchema = z.object({
  question: z.string().min(2, {
    message: "Question must be at least 2 characters.",
  }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  goal: z.string().min(2, {
    message: "Goal must be at least 2 characters.",
  }),
})

export function FormTest() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        question: "",
        username: "",
        goal: "",
        
      },
    })
   
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)
    }
  
  return (
    <Form {...form}>
      <EtavoltForm onSubmit={form.handleSubmit(onSubmit)} >
        <EtavoltField 
        control={form.control} 
        label="question" 
        placeholder="question" 
        description="what help do you need?"
        />
        
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />

        <FormField
          control={form.control}
          name="goal"
          render={({ field }) => (
                
            <FormItem>
              <FormLabel>Goal</FormLabel>
              <FormControl>
                <Input placeholder="goal" {...field} />
              </FormControl>
              <FormDescription>
                This is your goal.
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />
        
      </EtavoltForm>
      
    </Form>
  )
}
