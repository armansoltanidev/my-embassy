import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

// TODO: add validation and use zod form validation show proper error message to user
// show a toast to user data successful or error
// add loading icon when fetch data from api in button place holder

export default function AcceptAppointment() {
  return (
    <div className="flex items-center justify-center">
      <Dialog>
        <form>
          <DialogTrigger className="cursor-pointer" render={<Button />}>
            پذیرش نوبت
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>پذیرش نوبت</DialogTitle>
              <DialogDescription>
                لطفا شماره پیگیری ده رقمی کاربر را وارد نمایید. بدون # فقط عدد وارد نمایید
              </DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name-1">شماره پیگیری</FieldLabel>
                <Input id="name-1" name="name" placeholder="12473638238" />
              </Field>
            </FieldGroup>
            <DialogFooter>
              <DialogClose className="cursor-pointer" render={<Button variant="outline" />}>
                صرف نظر
              </DialogClose>
              <Button className="cursor-pointer" type="submit">
                دریافت اطلاعات
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
