import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

interface CustomFlatListProps {
  data: any;
  onPressItem: (item: any) => void;
  updateList: (pageNo: number) => void;
  rightItem?: (item: any) => React.JSX.Element;
}
const CustomFlatList = (props: CustomFlatListProps) => {
  const { data, onPressItem, updateList, rightItem } = props;
  const testId = {
    trxListingDetail: "test-listing-detail",
    flatList: "test-flat-list",
  };
  const pageNo = useRef(1);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    pageNo.current = 1;
    updateListing();
  };

  const onEndReached = () => {
    if (
      !data ||
      data?.isError ||
      data?.isLoading ||
      data.page === data.total_pages
    ) {
      return;
    }
    pageNo.current += 1;
    updateListing();
  };

  const updateListing = () => {
    if (!data || data?.total_pages > pageNo.current) {
      updateList(pageNo.current);
    }
  };

  useEffect(() => {
    if (refreshing && !data?.isLoading && !data?.isError) {
      setRefreshing(false);
    }
    if (data?.isError) {
      Alert.alert(
        "Unable to retrieve history list. Please refresh to try again."
      );
    }
  }, [data]);

  return (
    <FlatList
      testID={testId.flatList}
      refreshing={refreshing}
      onRefresh={onRefresh}
      data={data?.results}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            key={item.id}
            testID={`${testId.trxListingDetail}-${index}`}
            style={styles.listingItemContainer}
            onPress={() => onPressItem(item)}
          >
            <View style={styles.detailContainer}>
              <Text style={{ fontWeight: "bold" }}>{item.description}</Text>
              {rightItem && (
                <View style={styles.rightContainer}>{rightItem(item)}</View>
              )}
            </View>
            <Text>{item.type}</Text>
            <Text>{item.date}</Text>

            <View style={styles.horizontalLine} />
          </TouchableOpacity>
        );
      }}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.01}
      ListFooterComponent={
        data?.isLoading && !refreshing ? (
          <ActivityIndicator animating={true} color={"#964B00"} />
        ) : (
          <></>
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  listingItemContainer: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginHorizontal: "7%",
    marginTop: "2%",
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    width: "95%",
  },
  rightContainer: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  horizontalLine: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignSelf: "stretch",
    width: "100%",
    marginVertical: "3%",
  },
});

export default CustomFlatList;
