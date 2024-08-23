'use client'

import { getCategoryTracks } from "@/api/tracks"
import styles from "../../layout.module.css"
import { useAppDispatch, useAppSelector } from "@/utils/hooks"
import { useEffect, useRef, useState } from "react"
import { setCurrentPlaylist } from "@/store/features/playlistSlice"
import Centerblock from "@/components/Centerblock/Centerblock"
import { Filter } from "@/components/Filter/Filter"
import { TrackType } from "@/types/trackstypes" 

type CategoryProps = {
  params: {
    id: string;
  }
};

function Category({ params }: CategoryProps) {
  const dispatch = useAppDispatch();
  const { initialPlaylist } = useAppSelector((state) => state.playlist);
  const [tracks, setTracks] = useState<TrackType[]>([]);
  const name = useRef<string | undefined>(undefined);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const res = await getCategoryTracks(params.id);
        name.current = res.name;
        const items = res.items;
        const tracks = items
          .map((item: number) => initialPlaylist.filter((track: { _id: number }) => track._id === item))
          .flat();
        dispatch(setCurrentPlaylist(tracks));
        setTracks(tracks); // Обновление состояния
      } catch (error) {
        console.error("Error fetching category tracks:", error);
      }
    };

    fetchTracks();
  }, [dispatch, params.id, initialPlaylist]);

  return (
    <>
      <h2 className={styles.centerblockH2}>{name.current}</h2>
      <Filter tracks={tracks}/>
      <Centerblock />
    </>
  );
};

export default Category;