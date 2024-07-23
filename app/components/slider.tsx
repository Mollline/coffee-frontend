import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { View } from "react-native";
import { Text } from "react-native-svg";

type SliderProps = React.ComponentProps<typeof Slider>;

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <View>
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn("w-[60%]", className)}
        color="black"
        {...props}
      />
      <Text>erdfd</Text>
    </View>
  );
}
