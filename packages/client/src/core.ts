/* eslint-disable */
// This file was generated by [rspc](https://github.com/oscartbeaumont/rspc). Do not edit this file manually.

export type Procedures = {
    queries: 
        { key: "buildInfo", input: never, result: BuildInfo } | 
        { key: "categories.list", input: LibraryArgs<null>, result: { [key in Category]: number } } | 
        { key: "files.get", input: LibraryArgs<GetArgs>, result: { id: number; pub_id: number[]; kind: number | null; key_id: number | null; hidden: boolean | null; favorite: boolean | null; important: boolean | null; note: string | null; date_created: string | null; date_accessed: string | null; file_paths: FilePath[]; media_data: MediaData | null } | null } | 
        { key: "invalidation.test-invalidate", input: never, result: number } | 
        { key: "jobs.isActive", input: LibraryArgs<null>, result: boolean } | 
        { key: "jobs.reports", input: LibraryArgs<null>, result: JobGroups } | 
        { key: "library.list", input: never, result: LibraryConfigWrapped[] } | 
        { key: "library.statistics", input: LibraryArgs<null>, result: Statistics } | 
        { key: "locations.get", input: LibraryArgs<number>, result: Location | null } | 
        { key: "locations.getWithRules", input: LibraryArgs<number>, result: LocationWithIndexerRules | null } | 
        { key: "locations.indexer_rules.get", input: LibraryArgs<number>, result: IndexerRule } | 
        { key: "locations.indexer_rules.list", input: LibraryArgs<null>, result: IndexerRule[] } | 
        { key: "locations.indexer_rules.listForLocation", input: LibraryArgs<number>, result: IndexerRule[] } | 
        { key: "locations.list", input: LibraryArgs<null>, result: { id: number; pub_id: number[]; name: string | null; path: string | null; total_capacity: number | null; available_capacity: number | null; is_archived: boolean | null; generate_preview_media: boolean | null; sync_preview_media: boolean | null; hidden: boolean | null; date_created: string | null; node_id: number | null; node: Node | null }[] } | 
        { key: "nodeState", input: never, result: NodeState } | 
        { key: "nodes.listLocations", input: LibraryArgs<string | null>, result: ExplorerItem[] } | 
        { key: "search.objects", input: LibraryArgs<ObjectSearchArgs>, result: SearchData<ExplorerItem> } | 
        { key: "search.paths", input: LibraryArgs<FilePathSearchArgs>, result: SearchData<ExplorerItem> } | 
        { key: "sync.messages", input: LibraryArgs<null>, result: CRDTOperation[] } | 
        { key: "tags.get", input: LibraryArgs<number>, result: Tag | null } | 
        { key: "tags.getForObject", input: LibraryArgs<number>, result: Tag[] } | 
        { key: "tags.list", input: LibraryArgs<null>, result: Tag[] } | 
        { key: "volumes.list", input: never, result: Volume[] },
    mutations: 
        { key: "files.copyFiles", input: LibraryArgs<FileCopierJobInit>, result: null } | 
        { key: "files.cutFiles", input: LibraryArgs<FileCutterJobInit>, result: null } | 
        { key: "files.deleteFiles", input: LibraryArgs<FileDeleterJobInit>, result: null } | 
        { key: "files.duplicateFiles", input: LibraryArgs<FileCopierJobInit>, result: null } | 
        { key: "files.eraseFiles", input: LibraryArgs<FileEraserJobInit>, result: null } | 
        { key: "files.removeAccessTime", input: LibraryArgs<number[]>, result: null } | 
        { key: "files.renameFile", input: LibraryArgs<RenameFileArgs>, result: null } | 
        { key: "files.setFavorite", input: LibraryArgs<SetFavoriteArgs>, result: null } | 
        { key: "files.setNote", input: LibraryArgs<SetNoteArgs>, result: null } | 
        { key: "files.updateAccessTime", input: LibraryArgs<number>, result: null } | 
        { key: "invalidation.test-invalidate-mutation", input: LibraryArgs<null>, result: null } | 
        { key: "jobs.cancel", input: LibraryArgs<string>, result: null } | 
        { key: "jobs.clear", input: LibraryArgs<string>, result: null } | 
        { key: "jobs.clearAll", input: LibraryArgs<null>, result: null } | 
        { key: "jobs.generateThumbsForLocation", input: LibraryArgs<GenerateThumbsForLocationArgs>, result: null } | 
        { key: "jobs.identifyUniqueFiles", input: LibraryArgs<IdentifyUniqueFilesArgs>, result: null } | 
        { key: "jobs.objectValidator", input: LibraryArgs<ObjectValidatorArgs>, result: null } | 
        { key: "jobs.pause", input: LibraryArgs<string>, result: null } | 
        { key: "jobs.resume", input: LibraryArgs<string>, result: null } | 
        { key: "library.create", input: CreateLibraryArgs, result: LibraryConfigWrapped } | 
        { key: "library.delete", input: string, result: null } | 
        { key: "library.edit", input: EditLibraryArgs, result: null } | 
        { key: "locations.addLibrary", input: LibraryArgs<LocationCreateArgs>, result: null } | 
        { key: "locations.create", input: LibraryArgs<LocationCreateArgs>, result: null } | 
        { key: "locations.delete", input: LibraryArgs<number>, result: null } | 
        { key: "locations.fullRescan", input: LibraryArgs<number>, result: null } | 
        { key: "locations.indexer_rules.create", input: LibraryArgs<IndexerRuleCreateArgs>, result: null } | 
        { key: "locations.indexer_rules.delete", input: LibraryArgs<number>, result: null } | 
        { key: "locations.relink", input: LibraryArgs<string>, result: null } | 
        { key: "locations.update", input: LibraryArgs<LocationUpdateArgs>, result: null } | 
        { key: "nodes.edit", input: ChangeNodeNameArgs, result: null } | 
        { key: "p2p.acceptSpacedrop", input: [string, string | null], result: null } | 
        { key: "p2p.pair", input: LibraryArgs<PeerId>, result: number } | 
        { key: "p2p.spacedrop", input: SpacedropArgs, result: string | null } | 
        { key: "tags.assign", input: LibraryArgs<TagAssignArgs>, result: null } | 
        { key: "tags.create", input: LibraryArgs<TagCreateArgs>, result: Tag } | 
        { key: "tags.delete", input: LibraryArgs<number>, result: null } | 
        { key: "tags.update", input: LibraryArgs<TagUpdateArgs>, result: null },
    subscriptions: 
        { key: "invalidation.listen", input: never, result: InvalidateOperationEvent[] } | 
        { key: "jobs.newThumbnail", input: LibraryArgs<null>, result: string[] } | 
        { key: "jobs.progress", input: LibraryArgs<string>, result: JobProgressEvent } | 
        { key: "locations.online", input: never, result: number[][] } | 
        { key: "locations.quickRescan", input: LibraryArgs<LightScanArgs>, result: null } | 
        { key: "p2p.events", input: never, result: P2PEvent } | 
        { key: "p2p.spacedropProgress", input: string, result: number } | 
        { key: "sync.newMessage", input: LibraryArgs<null>, result: CRDTOperation }
};

export type BuildInfo = { version: string; commit: string }

export type CRDTOperation = { node: string; timestamp: number; id: string; typ: CRDTOperationType }

export type CRDTOperationType = SharedOperation | RelationOperation

/**
 * Meow
 */
export type Category = "Recents" | "Favorites" | "Photos" | "Videos" | "Movies" | "Music" | "Documents" | "Downloads" | "Encrypted" | "Projects" | "Applications" | "Archives" | "Databases" | "Games" | "Books" | "Contacts" | "Trash"

export type ChangeNodeNameArgs = { name: string | null }

export type CreateLibraryArgs = { name: string }

export type DiskType = "SSD" | "HDD" | "Removable"

export type EditLibraryArgs = { id: string; name: string | null; description: MaybeUndefined<string> }

export type ExplorerItem = { type: "Path"; has_local_thumbnail: boolean; thumbnail_key: string[] | null; item: FilePathWithObject } | { type: "Object"; has_local_thumbnail: boolean; thumbnail_key: string[] | null; item: ObjectWithFilePaths } | { type: "Location"; has_local_thumbnail: boolean; thumbnail_key: string[] | null; item: Location }

export type FileCopierJobInit = { source_location_id: number; target_location_id: number; sources_file_path_ids: number[]; target_location_relative_directory_path: string; target_file_name_suffix: string | null }

export type FileCutterJobInit = { source_location_id: number; target_location_id: number; sources_file_path_ids: number[]; target_location_relative_directory_path: string }

export type FileDeleterJobInit = { location_id: number; file_path_ids: number[] }

export type FileEraserJobInit = { location_id: number; file_path_ids: number[]; passes: string }

export type FilePath = { id: number; pub_id: number[]; is_dir: boolean | null; cas_id: string | null; integrity_checksum: string | null; location_id: number | null; materialized_path: string | null; name: string | null; extension: string | null; size_in_bytes: string | null; size_in_bytes_bytes: number[] | null; inode: number[] | null; device: number[] | null; object_id: number | null; key_id: number | null; date_created: string | null; date_modified: string | null; date_indexed: string | null }

export type FilePathFilterArgs = { locationId?: number | null; search?: string | null; extension?: string | null; createdAt?: OptionalRange<string>; path?: string | null; object?: ObjectFilterArgs | null }

export type FilePathSearchArgs = { take?: number | null; order?: FilePathSearchOrdering | null; cursor?: number[] | null; filter?: FilePathFilterArgs }

export type FilePathSearchOrdering = { name: SortOrder } | { sizeInBytes: SortOrder } | { dateCreated: SortOrder } | { dateModified: SortOrder } | { dateIndexed: SortOrder } | { object: ObjectSearchOrdering }

export type FilePathWithObject = { id: number; pub_id: number[]; is_dir: boolean | null; cas_id: string | null; integrity_checksum: string | null; location_id: number | null; materialized_path: string | null; name: string | null; extension: string | null; size_in_bytes: string | null; size_in_bytes_bytes: number[] | null; inode: number[] | null; device: number[] | null; object_id: number | null; key_id: number | null; date_created: string | null; date_modified: string | null; date_indexed: string | null; object: Object | null }

export type FromPattern = { pattern: string; replace_all: boolean }

export type GenerateThumbsForLocationArgs = { id: number; path: string }

export type GetArgs = { id: number }

export type IdentifyUniqueFilesArgs = { id: number; path: string }

export type IndexerRule = { id: number; pub_id: number[]; name: string | null; default: boolean | null; rules_per_kind: number[] | null; date_created: string | null; date_modified: string | null }

/**
 * `IndexerRuleCreateArgs` is the argument received from the client using rspc to create a new indexer rule.
 * Note that `rules` field is a vector of tuples of `RuleKind` and `parameters`.
 * 
 * In case of  `RuleKind::AcceptFilesByGlob` or `RuleKind::RejectFilesByGlob`, it will be a
 * vector of strings containing a glob patterns.
 * 
 * In case of `RuleKind::AcceptIfChildrenDirectoriesArePresent` or `RuleKind::RejectIfChildrenDirectoriesArePresent` the
 * `parameters` field must be a vector of strings containing the names of the directories.
 */
export type IndexerRuleCreateArgs = { name: string; dry_run: boolean; rules: ([RuleKind, string[]])[] }

export type InvalidateOperationEvent = { key: string; arg: any; result: any | null }

export type JobGroup = { id: string; action: string | null; status: JobStatus; created_at: string; jobs: JobReport[] }

export type JobGroups = { groups: JobGroup[]; index: { [key: string]: number } }

export type JobProgressEvent = { id: string; task_count: number; completed_task_count: number; message: string; estimated_completion: string }

export type JobReport = { id: string; name: string; action: string | null; data: number[] | null; metadata: { type: "thumbnailer"; data: null } | { type: "indexer"; data: null } | { type: "file_identifier"; data: null } | { type: "object_validator"; data: null } | { type: "file_cutter"; data: null } | { type: "file_copier"; data: null } | { type: "file_deleter"; data: null } | { type: "file_eraser"; data: null } | null; is_background: boolean; errors_text: string[]; created_at: string | null; started_at: string | null; completed_at: string | null; parent_id: string | null; status: JobStatus; task_count: number; completed_task_count: number; message: string; estimated_completion: string }

export type JobStatus = "Queued" | "Running" | "Completed" | "Canceled" | "Failed" | "Paused" | "CompletedWithErrors"

/**
 * Can wrap a query argument to require it to contain a `library_id` and provide helpers for working with libraries.
 */
export type LibraryArgs<T> = { library_id: string; arg: T }

export type LibraryConfigWrapped = { uuid: string; config: SanitisedLibraryConfig }

export type LightScanArgs = { location_id: number; sub_path: string }

export type Location = { id: number; pub_id: number[]; name: string | null; path: string | null; total_capacity: number | null; available_capacity: number | null; is_archived: boolean | null; generate_preview_media: boolean | null; sync_preview_media: boolean | null; hidden: boolean | null; date_created: string | null; node_id: number | null }

/**
 * `LocationCreateArgs` is the argument received from the client using `rspc` to create a new location.
 * It has the actual path and a vector of indexer rules ids, to create many-to-many relationships
 * between the location and indexer rules.
 */
export type LocationCreateArgs = { path: string; dry_run: boolean; indexer_rules_ids: number[] }

/**
 * `LocationUpdateArgs` is the argument received from the client using `rspc` to update a location.
 * It contains the id of the location to be updated, possible a name to change the current location's name
 * and a vector of indexer rules ids to add or remove from the location.
 * 
 * It is important to note that only the indexer rule ids in this vector will be used from now on.
 * Old rules that aren't in this vector will be purged.
 */
export type LocationUpdateArgs = { id: number; name: string | null; generate_preview_media: boolean | null; sync_preview_media: boolean | null; hidden: boolean | null; indexer_rules_ids: number[] }

export type LocationWithIndexerRules = { id: number; pub_id: number[]; name: string | null; path: string | null; total_capacity: number | null; available_capacity: number | null; is_archived: boolean | null; generate_preview_media: boolean | null; sync_preview_media: boolean | null; hidden: boolean | null; date_created: string | null; node_id: number | null; indexer_rules: { indexer_rule: IndexerRule }[] }

export type MaybeNot<T> = T | { not: T }

export type MaybeUndefined<T> = null | null | T

export type MediaData = { id: number; pixel_width: number | null; pixel_height: number | null; longitude: number | null; latitude: number | null; fps: number | null; capture_device_make: string | null; capture_device_model: string | null; capture_device_software: string | null; duration_seconds: number | null; codecs: string | null; streams: number | null }

export type Node = { id: number; pub_id: number[]; name: string; platform: number; date_created: string; identity: number[] | null; node_peer_id: string | null }

export type NodeState = ({ id: string; name: string; p2p_port: number | null; p2p_email: string | null; p2p_img_url: string | null }) & { data_path: string }

export type Object = { id: number; pub_id: number[]; kind: number | null; key_id: number | null; hidden: boolean | null; favorite: boolean | null; important: boolean | null; note: string | null; date_created: string | null; date_accessed: string | null }

export type ObjectFilterArgs = { favorite?: boolean | null; hidden?: ObjectHiddenFilter; dateAccessed?: MaybeNot<string | null> | null; kind?: number[]; tags?: number[]; category?: Category | null }

export type ObjectHiddenFilter = "exclude" | "include"

export type ObjectSearchArgs = { take?: number | null; order?: ObjectSearchOrdering | null; cursor?: number[] | null; filter?: ObjectFilterArgs }

export type ObjectSearchOrdering = { dateAccessed: SortOrder }

export type ObjectValidatorArgs = { id: number; path: string }

export type ObjectWithFilePaths = { id: number; pub_id: number[]; kind: number | null; key_id: number | null; hidden: boolean | null; favorite: boolean | null; important: boolean | null; note: string | null; date_created: string | null; date_accessed: string | null; file_paths: FilePath[] }

/**
 * Represents the operating system which the remote peer is running.
 * This is not used internally and predominantly is designed to be used for display purposes by the embedding application.
 */
export type OperatingSystem = "Windows" | "Linux" | "MacOS" | "Ios" | "Android" | { Other: string }

export type OptionalRange<T> = { from: T | null; to: T | null }

/**
 * TODO: P2P event for the frontend
 */
export type P2PEvent = { type: "DiscoveredPeer"; peer_id: PeerId; metadata: PeerMetadata } | { type: "SpacedropRequest"; id: string; peer_id: PeerId; name: string }

export type PeerId = string

export type PeerMetadata = { name: string; operating_system: OperatingSystem | null; version: string | null; email: string | null; img_url: string | null }

export type RelationOperation = { relation_item: string; relation_group: string; relation: string; data: RelationOperationData }

export type RelationOperationData = "Create" | { Update: { field: string; value: any } } | "Delete"

export type RenameFileArgs = { location_id: number; kind: RenameKind }

export type RenameKind = { One: RenameOne } | { Many: RenameMany }

export type RenameMany = { from_pattern: FromPattern; to_pattern: string; from_file_path_ids: number[] }

export type RenameOne = { from_file_path_id: number; to: string }

export type RuleKind = "AcceptFilesByGlob" | "RejectFilesByGlob" | "AcceptIfChildrenDirectoriesArePresent" | "RejectIfChildrenDirectoriesArePresent"

export type SanitisedLibraryConfig = { name: string; description: string | null; node_id: string }

export type SanitisedNodeConfig = { id: string; name: string; p2p_port: number | null; p2p_email: string | null; p2p_img_url: string | null }

export type SearchData<T> = { cursor: number[] | null; items: T[] }

export type SetFavoriteArgs = { id: number; favorite: boolean }

export type SetNoteArgs = { id: number; note: string | null }

export type SharedOperation = { record_id: any; model: string; data: SharedOperationData }

export type SharedOperationData = { c: { [key: string]: any } } | { u: { field: string; value: any } } | "d"

export type SortOrder = "Asc" | "Desc"

export type SpacedropArgs = { peer_id: PeerId; file_path: string[] }

export type Statistics = { id: number; date_captured: string; total_object_count: number; library_db_size: string; total_bytes_used: string; total_bytes_capacity: string; total_unique_bytes: string; total_bytes_free: string; preview_media_bytes: string }

export type Tag = { id: number; pub_id: number[]; name: string | null; color: string | null; redundancy_goal: number | null; date_created: string | null; date_modified: string | null }

export type TagAssignArgs = { object_ids: number[]; tag_id: number; unassign: boolean }

export type TagCreateArgs = { name: string; color: string }

export type TagUpdateArgs = { id: number; name: string | null; color: string | null }

export type Volume = { name: string; mount_point: string; total_capacity: string; available_capacity: string; is_removable: boolean; disk_type: DiskType | null; file_system: string | null; is_root_filesystem: boolean }
