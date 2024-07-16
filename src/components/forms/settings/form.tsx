"use client";

import { Separator } from "@/components/ui/separator";
import { useSettings } from "@/hooks/settings/use-settings";
import PremiumBadge from "@/icons/premium-badge";
import dynamic from "next/dynamic";
import CodeSnippet from "./code-snippet";
import { DomainUpdate } from "./domain-update";
import EditChatbotIcon from "./edit-chatbot-icon";

const WelcomeMessage = dynamic(
  () => import("./greetings-message").then((props) => props.default),
  {
    ssr: false,
  }
);

type Props = {
  id: string;
  name: string;
  plan: "STANDARD" | "PRO" | "ULTIMATE";
  chatBot: {
    id: string;
    icon: string | null;
    welcomeMessage: string | null;
  } | null;
};

function SettingsForm({ id, name, chatBot, plan }: Props) {
  const {
    register,
    onUpdateSettings,
    errors,
    onDeleteDomain,
    deleting,
    loading,
  } = useSettings(id);
  return (
    <form className="flex flex-col gap-8 pb-10" onSubmit={onUpdateSettings}>
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-2xl">Domain Settings</h2>
        <Separator orientation="horizontal" />
        <DomainUpdate name={name} register={register} errors={errors} />
        <CodeSnippet id={id} />
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <div className="flex gap-4 items-center">
          <h2 className="font-bold text-2xl">Chatbot Settings</h2>
          <div className="flex gap-1 bg-cream rounded-full px-3 py-1 text-xs items-center font-bold">
            <PremiumBadge />
            Premium
          </div>
        </div>
        <Separator orientation="horizontal" />
        <div className="grid md:grid-cols-2">
          <div className="col-span-1 flex flex-col gap-5 order-last md:order-first">
            <EditChatbotIcon
              chatBot={chatBot}
              register={register}
              errors={errors}
            />
            <WelcomeMessage
              message={chatBot?.welcomeMessage!}
              register={register}
              errors={errors}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default SettingsForm;
