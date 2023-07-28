import React from 'react';
import { Alert, Pressable, View, ViewStyle } from 'react-native';
import {
	ExplorerItem,
	ObjectKind,
	getItemFilePath,
	getItemObject,
	isPath,
	useLibraryQuery
} from '@sd/client';
import { InfoPill, PlaceholderPill } from '~/components/primitive/InfoPill';
import { tw, twStyle } from '~/lib/tailwind';

type Props = {
	data: ExplorerItem;
	style?: ViewStyle;
};

const InfoTagPills = ({ data, style }: Props) => {
	const objectData = getItemObject(data);
	const filePath = getItemFilePath(data);

	const tagsQuery = useLibraryQuery(['tags.getForObject', objectData?.id ?? -1], {
		enabled: Boolean(objectData)
	});

	const isDir = data && isPath(data) ? data.item.is_dir : false;

	return (
		<View style={twStyle('mt-1 flex flex-row flex-wrap', style)}>
			{/* Kind */}
			<InfoPill
				containerStyle={tw`mr-1`}
				text={isDir ? 'Folder' : ObjectKind[objectData?.kind || 0]!}
			/>
			{/* Extension */}
			{filePath?.extension && (
				<InfoPill text={filePath.extension} containerStyle={tw`mr-1`} />
			)}
			{/* TODO: What happens if I have too many? */}
			{tagsQuery.data?.map((tag) => (
				<InfoPill
					key={tag.id}
					text={tag.name ?? 'Unnamed Tag'}
					containerStyle={twStyle('mr-1', { backgroundColor: tag.color + 'CC' })}
					textStyle={tw`text-white`}
				/>
			))}
			<Pressable onPress={() => Alert.alert('TODO')}>
				<PlaceholderPill text={'Add Tag'} />
			</Pressable>
		</View>
	);
};

export default InfoTagPills;
