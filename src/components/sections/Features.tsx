import { BoxesIcon, BoxIcon, StarIcon } from "lucide-react";

export default function Features() {
  return (
    <div className="flex justify-between items-center">
      <img src="/addExpense2.svg" alt="hero" className="" />
      <div className="flex flex-col justify-start items-start">
        <h3 className="text-2xl font-semibold text-sky-400">Features</h3>
        <h3 className="text-4xl font-bold">Expanse Premium</h3>
        <div className="flex flex-col gap-4 pt-8">
          <div className="flex gap-4 items-center">
            <StarIcon size={24} className="text-sky-300" />
            <h3 className="text-xl font-bold ">Budgeting Intervals</h3>
          </div>
          <p className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, doloremque quae, quas, quod
          </p>
        </div>
        <div className="flex flex-col gap-4 pt-8">
          <div className="flex gap-4 items-center">
            <BoxesIcon size={24} className="text-sky-300" />
            <h3 className="text-xl font-bold ">Budgeting Intervals</h3>
          </div>
          <p className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, doloremque quae, quas, quod
          </p>
        </div>
        <div className="flex flex-col gap-4 pt-8">
          <div className="flex gap-4 items-center">
            <BoxIcon size={24} className="text-sky-300" />
            <h3 className="text-xl font-bold ">Budgeting Intervals</h3>
          </div>
          <p className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, doloremque quae, quas, quod
          </p>
        </div>
      </div>
    </div>
  );
}
