import Infobar from "@/components/infobar/index";
import BillingSettings from "@/components/settings/billing-setting";

type Props = {};

function page({}: Props) {
  return (
    <>
      <Infobar />
      <div className="overflow-y-auto w-full chat-window flex-1 h-0 flex flex-col gap-10">
        <BillingSettings />
      </div>
    </>
  );
}

export default page;
