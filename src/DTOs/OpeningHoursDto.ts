import { IsInt, IsString } from "class-validator";

interface OpeningHours {
  id: number;
  day: number;
  opening: string;
  closing: string;
}
export class OpeningHoursDto {

  constructor(openingHours: OpeningHours) {
    this.id = openingHours.id;
    this.day = openingHours.day;
    this.opening = openingHours.opening;
    this.closing = openingHours.closing;
  }

  @IsInt()
  id: number;

  @IsInt()
  day: number;

  @IsString()
  opening: string;

  @IsString()
  closing: string;
}