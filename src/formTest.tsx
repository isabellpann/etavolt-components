"use client"
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form/form"
import { Input } from "@/components/ui/form/input"

const formSchema = z.object({
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-5">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <div className="flex flex-wrap">
                
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
            </div>
          )}
        />
        <FormField
          control={form.control}
          name="goal"
          render={({ field }) => (
            <div className="flex flex-wrap">
                
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
            </div>
          )}
        />
        <div className="flex justify-end">
            <Button type="submit" >Submit</Button>
        </div>
      </form>
    </Form>
  )
}
