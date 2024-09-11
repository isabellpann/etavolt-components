import * as React from "react"
import {
  
  FormProvider,
} from "react-hook-form"

import { cn } from "@/lib/utils";
import { EtavoltButton } from "../button"
import { EtavoltInput } from "./etavolt-input"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../form";

const Form = FormProvider

const EtavoltForm = (props: any) => {
  return (
    <form className={cn("")} {...props}>
      <div className="w-full flex">
      {props.children}
      </div>
        <div className="flex justify-end w-full p-5">
            <EtavoltButton type="submit" >Submit</EtavoltButton>
        </div>
    </form>
  );
};

interface InputFieldProps {
  control: any;  // Define the type for 'control' based on your form library
  label: string;
  placeholder?: string;  // Optional prop for placeholder
  description?: string;  // Optional prop for description
}

const EtavoltField: React.FC<InputFieldProps> = ({ control, label}) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 space-x-6 items-center">

    <FormField
          control={control}
          name={label}
          render={({ field }) => (
            <FormItem className="flex flex-col p-5 ">
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <EtavoltInput {...field} />
              </FormControl>
            <FormMessage/>
          </FormItem>
        )}
      />
    </div>
  );
};





export {
  Form,
  EtavoltForm,
  EtavoltField,
}

