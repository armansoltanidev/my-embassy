"use client";

import * as React from "react";
import {
  Controller,
  type Control,
  type ControllerRenderProps,
  type FieldValues,
  type Path,
} from "react-hook-form";

import { cn } from "@/lib/utils";

function Form({ className, ...props }: React.ComponentProps<"form">) {
  return <form className={cn("space-y-6", className)} {...props} />;
}

type FormFieldProps<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>,
> = {
  control: Control<TFieldValues>;
  name: TName;
  render: (props: {
    field: ControllerRenderProps<TFieldValues, TName>;
    fieldState: any;
  }) => React.ReactElement;
};

function FormField<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>,
>({ control, name, render }: FormFieldProps<TFieldValues, TName>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState, formState }) =>
        render({ field, fieldState })
      }
    />
  );
}

function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("grid gap-2", className)} {...props} />;
}

function FormLabel({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      className={cn(
        "text-sm font-medium leading-none text-foreground",
        className,
      )}
      {...props}
    />
  );
}

function FormControl({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-2", className)} {...props} />;
}

function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props} />
  );
}

function FormMessage({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) {
  if (!children) {
    return null;
  }

  return (
    <p className={cn("text-sm text-destructive", className)} {...props}>
      {children}
    </p>
  );
}

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
};
