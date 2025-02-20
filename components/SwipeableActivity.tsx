import { Alert, StyleSheet, Text, View } from "react-native";
import Activity from "./Activity";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { useActivities } from "@/hooks/useActivities";
import { useActivitiesContext } from "./ActivitiesProvider";
import Animated, { useAnimatedStyle, interpolate } from "react-native-reanimated";

export default function SwipeableActivity({ activity }: { activity: any }) {
  const {deleteActivity} = useActivitiesContext();

  const renderLeftActions = (progress: any) => {
    const animatedStyle = useAnimatedStyle(() => {
      const opacity = interpolate(progress.value, [0, 1], [0, 1]);
      const trans = interpolate(progress.value, [0, 1], [-100, 0]);

      return {
        opacity,
        transform: [{ translateX: trans }],
      };
    });

    return (
      <Animated.View style={[styles.actionView, animatedStyle]}>
        <Text style={styles.actionText}>Delete</Text>
      </Animated.View>
    );
  };

  const renderRightActions = (progress: any) => {
    const animatedStyle = useAnimatedStyle(() => {
      const opacity = interpolate(progress.value, [0, 1], [0, 1]);
      const trans = interpolate(progress.value, [0, 1], [100, 0]);

      return {
        opacity,
        transform: [{ translateX: trans }],
      };
    });

    return (
      <Animated.View style={[styles.actionView, animatedStyle]}>
        <Text style={styles.actionText}>Delete</Text>
      </Animated.View>
    );
  };
  
  return (
    <View key={activity.id} style={styles.container}>
      <Swipeable
        renderLeftActions={() => <Action text="Delete" />}
        renderRightActions={() => <Action text="Delete" />}
        onSwipeableOpen={() => {
          deleteActivity(activity.id);
        }}
      >
        <Activity activity={activity} />
      </Swipeable>
    </View>
  );
}


export const Action = ({ text }: { text: string }) => {
  return (
    <View style={styles.actionView}>
      <Text style={styles.actionText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    backgroundColor: "white",
  },
  actionView: {
    backgroundColor: "#FF4D4F",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: "100%",
  },
  actionText: {
    color: "white",
    fontWeight: "bold",
  },
});