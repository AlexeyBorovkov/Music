import { dislikeTrack, likeTrack } from "@/api/tracks";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { setDislikeTrack, setLikeTrack } from "@/store/features/playlistSlice";
import { TrackType } from "@/types/trackstypes";

const useLikeTrack = (track: TrackType) => {
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.user);
  const tokens = userState ? userState.tokens : { access: undefined, refresh: undefined };

  const tracksState = useAppSelector((state) => state.tracks);
  const favoritePlaylist = tracksState ? tracksState.favoritePlaylist : [];

  const trackId = track._id;
  const isLiked = favoritePlaylist.some((likedTrack: TrackType) => likedTrack._id === trackId);

  const handleLike = async (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (!tokens.access || !tokens.refresh) {
      return alert("Вы не авторизованы");
    }

    try {
      if (isLiked) {
        await dislikeTrack({ trackId, access: tokens.access, refresh: tokens.refresh });
        dispatch(setDislikeTrack(track));
      } else {
        await likeTrack({ trackId, access: tokens.access, refresh: tokens.refresh });
        dispatch(setLikeTrack(track));
      }
    } catch (error) {
      console.error("Ошибка при обработке лайка/дизлайка:", error);
    }
  };

  return { handleLike, isLiked };
};

export default useLikeTrack;