import { Activity as ActivityType } from "@/hooks/useActivities";
import { StyleSheet, Text, View } from "react-native";

export default function Activity({ activity }: { activity: ActivityType }) {
  return (
    <View style={styles.activity}>
      <Text style={styles.date}>
        {new Date(activity.date).toLocaleDateString()}
      </Text>
      <Text style={styles.steps}>
        Steps: {activity.steps}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  activity: {
    paddingBottom: 20,
    marginLeft: 4
  },
  date: {
    fontSize: 15,
    color: "#4F4F4F"

  },
  steps: {
    fontSize: 20
  }
});