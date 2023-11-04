import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import axios from "axios";
import * as z from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "./ui/form"
import { toast } from "./ui/use-toast";
import { Props, useData } from "../context/DataContext";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";

const FormSchema = z.object({
  sbiSearch: z
    .string({
      required_error: "請輸入要查詢的站點內容",
    }),
});

const InputSearch = () => {
  const { data, setDisplayData, getYoubikeData } = useData();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      sbiSearch: '',
    },
  })

  async function onSubmit(inputText: z.infer<typeof FormSchema>) {
    try {
      await getYoubikeData();
      if (data.length > 1) {
        const displayData = data.filter((item: Props) => item.sarea.includes(inputText.sbiSearch));
        setDisplayData(displayData);
      }
    } catch (error) {
      toast({
        title: "查詢失敗",
        description: "請稍後再試",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="relative h-[50px]">
          <FormField
            control={form.control}
            name="sbiSearch"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="form-input block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="搜尋站點"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            variant='ghost'
            size='icon'
            type="submit"
            className="absolute -right-1 top-5 transform -translate-y-1/2"
            onClick={form.handleSubmit(onSubmit)}
          >
            <Image alt="logo" src="/assets/search.png" className="pointer-events-none w-6 h-6" />
          </Button>
          <FormMessage />
        </div>
      </form>
    </Form>
  )
}

export default InputSearch