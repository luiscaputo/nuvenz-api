import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TweetsReactions } from "./TweetsReactions";

@Index("reactionType", ["reactionType"], { unique: true })
@Entity("reactionsType", { schema: "nuvenz_api" })
export class ReactionsType {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "reactionType",
    nullable: true,
    unique: true,
    length: 50,
  })
  reactionType: string | null;

  @Column("datetime", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("datetime", {
    name: "updated_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date | null;

  @OneToMany(
    () => TweetsReactions,
    (tweetsReactions) => tweetsReactions.reactionType
  )
  tweetsReactions: TweetsReactions[];
}
