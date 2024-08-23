import { getFavoriteTrack } from "@/store/features/playlistSlice";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { useEffect } from "react";
 
export const useInitialLikedTracks = () => {
    const userState = useAppSelector((state) => state.user);
    const tokens = userState?.tokens;
    const dispatch = useAppDispatch();
    useEffect(() => {
      if (tokens?.access) {
        dispatch(getFavoriteTrack(tokens));
      }
    }, [dispatch, tokens]);
    
    return tokens;
  };
  
  export default useInitialLikedTracks;