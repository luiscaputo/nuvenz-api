import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Retweets } from "./Retweets";
import { RetweetsReactions } from "./RetweetsReactions";
import { Tweets } from "./Tweets";
import { TweetsComments } from "./TweetsComments";
import { TweetsReactions } from "./TweetsReactions";

@Index("nickname", ["nickname"], { unique: true })
@Entity("users", { schema: "nuvenz_api" })
export class Users {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nickname", unique: true, length: 250 })
  nickname: string;

  @Column("varchar", { name: "password", length: 150 })
  password: string;

  @Column("varchar", { name: "status", length: 50 })
  status: string;

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

  @OneToMany(() => Retweets, (retweets) => retweets.userReacted)
  retweets: Retweets[];

  @OneToMany(
    () => RetweetsReactions,
    (retweetsReactions) => retweetsReactions.userReacted
  )
  retweetsReactions: RetweetsReactions[];

  @OneToMany(() => Tweets, (tweets) => tweets.userTweet)
  tweets: Tweets[];

  @OneToMany(
    () => TweetsComments,
    (tweetsComments) => tweetsComments.userComment
  )
  tweetsComments: TweetsComments[];

  @OneToMany(
    () => TweetsReactions,
    (tweetsReactions) => tweetsReactions.userReacted
  )
  tweetsReactions: TweetsReactions[];
}
