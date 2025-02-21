import { Alert, StyleSheet, Text, View } from "react-native";
import Activity from "./Activity";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { useActivities } from "@/hooks/useActivities";
import { useActivitiesContext } from "./ActivitiesProvider";

export default function SwipeableActivity({ activity }: { activity: any }) {
  const {deleteActivity} = useActivitiesContext();
  
  return (
    <View key={activity.id} style={styles.container}>
      <Swipeable
        renderLeftActions={() => <Action text="Delete" />}
        renderRightActions={() => <Action text="Delete" />}
        onSwipeableOpen={() => {
          deleteActivity(activity.id);
        }}
      >
        <View style={styles.innerContainer}>
          <Activity activity={activity} />
        </View>
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
    flex: 1,
    borderWidth: 3,
    marginBottom: 16,
    backgroundColor: "white",
    marginLeft: 4,
    marginRight: 4
  },
  innerContainer: {
  
  },
  actionView: {
    backgroundColor: "#D00414",
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