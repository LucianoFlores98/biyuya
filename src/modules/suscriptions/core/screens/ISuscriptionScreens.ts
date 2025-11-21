import type ISuscription from "../entities/ISuscription";

export interface ISuscriptionScreens {
  onGetSuscriptionSuccess: (value: ISuscription[]) => void;
  onGetSuscriptionError: (error: string) => void;

  onEditSuscriptionSuccess: (value: ISuscription) => void;
  onEditSuscriptionError: (error: string) => void;

  onSaveSuscriptionSuccess: (value: ISuscription) => void;
  onSaveSuscriptionError: (error: string) => void;

  onDeleteSuscriptionSuccess: (value: ISuscription) => void;
  onDeleteSuscriptionError: (error: string) => void;
}
