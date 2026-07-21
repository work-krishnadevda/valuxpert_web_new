import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

import { MEETINGS } from "@/data/meetingTypes";

type MeetingKey = keyof typeof MEETINGS;

export default function BookingTabs() {
  const meetingTypes = Object.keys(MEETINGS) as MeetingKey[];

  const [selected, setSelected] = useState<MeetingKey>(meetingTypes[0]);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi();

      cal("ui", {
        theme: "light",
      });
    })();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold text-[#2B285A]">
          Schedule a Meeting
        </h2>

        <p className="mt-2 text-gray-600">
          Select a meeting type and book a convenient time with our team.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {meetingTypes.map((meeting) => (
          <button
            key={meeting}
            type="button"
            onClick={() => setSelected(meeting)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              selected === meeting
                ? "bg-[#635BFF] text-white shadow-md"
                : "border border-gray-300 bg-white text-gray-700 hover:border-[#635BFF] hover:text-[#635BFF]"
            }`}
          >
            {meeting}
          </button>
        ))}
      </div>

      <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <Cal
          key={selected}
          calLink={MEETINGS[selected]}
          config={{
            layout: "month_view",
          }}
          style={{
            width: "100%",
            minHeight: "560px",
            border: "none",
          }}
        />
      </div>
    </div>
  );
}