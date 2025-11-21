import type { IDeleteSuscriptionAction } from "../../core/actions/DeleteSuscriptionAction";
import type { IEditSuscriptionAction } from "../../core/actions/EditSuscriptionAction";
import type { IGetSuscriptionAction } from "../../core/actions/GetSuscriptionAction";
import type { ISaveSuscriptionAction } from "../../core/actions/SaveSuscriptionAction";
import type { ISuscriptionPresenter } from "../../core/presentation/ISuscriptionPresenter";
import type { ISuscriptionScreens } from "../../core/screens/ISuscriptionScreens";

export const SuscriptionPresenter = (
  getSuscription: IGetSuscriptionAction,
  editSuscription: IEditSuscriptionAction,
  saveSuscription: ISaveSuscriptionAction,
  deleteSuscription: IDeleteSuscriptionAction,
  suscriptionScreen: ISuscriptionScreens
): ISuscriptionPresenter => {
  return {
    async getSuscription() {
      try {
        const res = await getSuscription.execute();
        suscriptionScreen.onGetSuscriptionSuccess(res);
      } catch (error) {
        suscriptionScreen.onGetSuscriptionError(error);
      }
    },

    async editSuscription(body: object, id: string) {
      try {
        const res = await editSuscription.execute(body, id);
        suscriptionScreen.onEditSuscriptionSuccess(res);
      } catch (error) {
        suscriptionScreen.onEditSuscriptionError(error);
      }
    },

    async saveSuscription(body: object) {
      try {
        const res = await saveSuscription.execute(body);
        suscriptionScreen.onSaveSuscriptionSuccess(res);
      } catch (error) {
        suscriptionScreen.onSaveSuscriptionError(error);
      }
    },

    async deleteSuscription(id: string) {
      try {
        const res = await deleteSuscription.execute(id);
        suscriptionScreen.onDeleteSuscriptionSuccess(res);
      } catch (error) {
        suscriptionScreen.onDeleteSuscriptionError(error);
      }
    },
  };
};
