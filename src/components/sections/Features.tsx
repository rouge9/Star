import { BellDotIcon, BoxesIcon, BoxIcon, SparkleIcon } from "lucide-react";

export default function Features() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <img src="/addExpense2.svg" alt="hero" className="" />
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold text-sky-400">Features</h3>
          <h3 className="text-4xl font-bold">Expanse Premium</h3>
          <div className="flex flex-col gap-4 pt-8">
            <div className="flex gap-4 items-center">
              <SparkleIcon size={24} className="text-sky-300" />
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
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold text-sky-400">Advantages</h3>
          <h3 className="text-4xl font-bold">Why Choose Expense?</h3>
          <div className="flex flex-col gap-4 pt-8">
            <div className="flex gap-4 items-center">
              <BellDotIcon size={30} className="text-sky-300" />
              <h3 className="text-xl font-bold ">Budgeting Intervals</h3>
            </div>
            <p className="text-lg text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptates, doloremque quae, quas, quod, Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Fuga delectus omnis, eos amet
              aspernatur enim voluptatibus facere velit quibusdam est ratione
              non placeat doloremque hic voluptate adipisci ab voluptates vitae.
            </p>
          </div>
        </div>
        <img src="/report2.svg" alt="hero" className="" />
      </div>
      <div className="flex justify-between items-center">
        <img src="/addCategory.svg" alt="addCategory" className="" />
        <div className="flex flex-col">
          <div className="flex gap-4 items-center">
            <SparkleIcon size={40} className="text-sky-300" />
            <h1 className="text-4xl font-bold ">Fully Customizable</h1>
          </div>
          <p className="text-lg text-muted-foreground pt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, doloremque quae, quas, quod, Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque blanditiis perferendis sed
            cupiditate labore sequi doloribus dolor praesentium! Optio modi
            explicabo minus omnis ipsam minima, molestiae quis dolore recusandae
            consectetur.
          </p>
        </div>
      </div>
    </div>
  );
}
