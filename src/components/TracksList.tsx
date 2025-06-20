import library from "../../assets/data/library.json";
import { FlatList, FlatListProps, View } from 'react-native'
import { TrackListsItem } from './TracksListItem'

export type TracksListProps = Partial<FlatListProps<unknown>>

export const TracksList = ({...flatlistProps }: TracksListProps) => {
	return (
		<FlatList
			data={library}
			renderItem={({ item: track }) => (
				<TrackListsItem
					track={{
						...track,
						image: track.artwork,
					}}
				/>
			)}
			{...flatlistProps}
		/>
	)
}