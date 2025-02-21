import { Activity as ActivityType } from "@/hooks/useActivities";
import { StyleSheet, Text } from "react-native";

export default function Activity({ activity }: { activity: ActivityType }) {
  return (
    <Text style={styles.activity}>
      {activity.steps} steps on {new Date(activity.date).toLocaleDateString()}
    </Text>
  );
}

const styles = StyleSheet.create({
  activity: {
    paddingBottom: 32,
  }
});