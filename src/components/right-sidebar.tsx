import { cn } from "../lib/utils";
import { useNodeStore } from "../stores/flow-store";
import { useSidebarStore } from "../stores/sidebar-store";
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "./ui/sidebar";

function RightSidebar() {
  const { isOpen, setIsOpen } = useSidebarStore();
  const {
    label,
    setLabel,
    setBgColor,
    setTextColor,
    setFontSize,
    setHandleColor,
    setSelectedNode,
  } = useNodeStore();

  const handleToggle = () => {
    setIsOpen();
    setSelectedNode(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLabel(e.target.value);
  };

  const handleChangeColor = (bgColor: string, textColor: string) => {
    setBgColor(bgColor);
    setTextColor(textColor);
  };

  const handleChangeFontSize = (fontSize: string) => {
    setFontSize(fontSize);
  };

  const handleHandleColor = (color: string) => {
    setHandleColor(color);
  };

  return (
    <div className="relative">
      <div
        className={cn({
          "fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.1)] z-[9998]":
            isOpen,
        })}
        onClick={handleToggle}
      />
      <Sidebar
        side="right"
        className={cn(
          "border-r-black border !fixed !top-0 !right-0 h-full !w-[350px] z-[9999] !translate-x-[350px] transition-all duration-3000 ease-in !bg-white",
          {
            "!translate-x-0": isOpen,
          }
        )}
      >
        <SidebarGroup>
          <SidebarGroupLabel className="uppercase">Label</SidebarGroupLabel>
          <SidebarGroupContent>
            <input
              value={label}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-500 border-solid rounded-md"
            />
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="uppercase">
            Background color
          </SidebarGroupLabel>
          <div className="flex flex-col gap-2">
            <SidebarGroupContent className="space-x-1">
              <button
                className="bg-red-600 text-white min-w-[50px] h-[50px] rounded-md"
                onClick={() => handleChangeColor("bg-red-600", "text-white")}
              >
                red
              </button>
              <button
                className="bg-blue-600 text-white min-w-[50px] h-[50px] rounded-md"
                onClick={() => handleChangeColor("bg-blue-600", "text-white")}
              >
                blue
              </button>
            </SidebarGroupContent>
          </div>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="uppercase">Font size</SidebarGroupLabel>
          <SidebarGroupContent className="space-x-1">
            <button
              className="w-8 h-8 border border-gray-800 rounded-md"
              onClick={() => handleChangeFontSize("text-sm")}
            >
              sm
            </button>
            <button
              className="w-8 h-8 border border-gray-800 rounded-md"
              onClick={() => handleChangeFontSize("text-base")}
            >
              md
            </button>
            <button
              className="w-8 h-8 border border-gray-800 rounded-md"
              onClick={() => handleChangeFontSize("text-lg")}
            >
              lg
            </button>
            <button
              className="w-8 h-8 border border-gray-800 rounded-md"
              onClick={() => handleChangeFontSize("text-xl")}
            >
              xl
            </button>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="uppercase">
            Handle color
          </SidebarGroupLabel>
          <SidebarGroupContent className="space-x-1">
            <button
              className="h-8 px-2 py-1 border border-gray-800 rounded-md min-w-8"
              onClick={() => handleHandleColor("bg-black")}
            >
              black
            </button>
          </SidebarGroupContent>
        </SidebarGroup>
      </Sidebar>
    </div>
  );
}

export default RightSidebar;
