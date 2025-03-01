import Dropdown from "@/components/elements/Dropdown";


export default function Home() {
  return (
    <div>

      <Dropdown
        value="1"
        items={[
          { key: "1", label: "1" },
          { key: "2", label: "2" },
          { key: "3", label: "3" },
          { key: "4", label: "4" },
          { key: "5", label: "5" },
        ]}
      />
      <Dropdown
        items={[
          { key: "1", label: "1" },
          { key: "2", label: "2" },
          { key: "3", label: "3" },
          { key: "4", label: "4" },
          { key: "5", label: "5" },
        ]}
      />
    </div>
  );
}
