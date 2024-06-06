import { useTransform, useScroll, motion } from "framer-motion";

export default function Faq() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return (
    <motion.div id="faq" className="flex flex-col pb-16" style={{ scale }}>
      <div className="flex flex-col justify-start">
        <h1 className="text-2xl font-normal text-sky-300">FAQ</h1>
        <h1 className="text-3xl lg:text-5xl font-bold text-foreground pt-3">
          Frequently Asked
        </h1>
        <h1 className="text-3xl lg:text-5xl font-bold text-foreground">
          Questions
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-start  lg:space-x-16 pt-12">
        <div className="flex flex-col bg-sky-300 rounded-lg px-8 pt-8 w-full gap-2">
          <h1 className="text-2xl font-semibold">
            Is it possible to create custom categories for my expenses?
          </h1>
          <p className="text-lg text-muted-foreground">
            Absolutely! Expanse offers fully customizable categories so you can
            tailor your expense tracking to fit your specific needs and
            preferences.
          </p>
        </div>
        <div className="flex flex-col px-8 pt-8 w-full gap-2">
          <h1 className="text-2xl font-semibold">
            How secure is my financial data with Expanse?
          </h1>
          <p className="text-lg text-muted-foreground">
            Your financial data is highly secure with Expanse. We use advanced
            encryption to ensure that your information is protected and private.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-start  lg:space-x-16 pt-8">
        <div className="flex flex-col px-8 pt-8 w-full gap-2">
          <h1 className="text-2xl font-semibold">
            What devices are compatible with Expanse?
          </h1>
          <p className="text-lg text-muted-foreground">
            Expanse is designed to be compatible with Android devices, ensuring
            that you can manage your finances on the go. You can download
            Expanse from the Google Play. We continually update our app to
            ensure compatibility with the latest devices.
          </p>
        </div>
        <div className="flex flex-col bg-sky-300 rounded-lg px-8 pt-8 w-full gap-2">
          <h1 className="text-2xl font-semibold">
            How does Expanse help me stay within my budget?
          </h1>
          <p className="text-lg text-muted-foreground">
            Expanse lets you set monthly budgets and monitors your spending in
            real-time. You'll receive notifications when you're approaching your
            limits, helping you make adjustments as needed.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-start  lg:space-x-16 pt-8">
        <div className="flex flex-col bg-sky-300 rounded-lg px-8 pt-8 w-full gap-2">
          <h1 className="text-2xl font-semibold">
            What types of reports can I generate with Expanse?
          </h1>
          <p className="text-lg text-muted-foreground">
            You can generate detailed reports that include charts and graphs to
            visualize your spending patterns, helping you analyze and improve
            your financial health.
          </p>
        </div>
        <div className="flex flex-col px-8 pt-8 w-full gap-2">
          <h1 className="text-2xl font-semibold">Can I use Expanse offline?</h1>
          <p className="text-lg text-muted-foreground">
            You can enter expenses and view your budget offline. However,
            syncing with your bank and accessing some features will require an
            internet connection.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
