import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Retweets } from "./Retweets";
import { RetweetsReactions } from "./RetweetsReactions";
import { Users } from "./Users";
import { TweetsComments } from "./TweetsComments";
import { TweetsReactions } from "./TweetsReactions";

@Index("userTweetId", ["userTweetId"], {})
@Entity("tweets", { schema: "nuvenz_api" })
export class Tweets {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("text", { name: "tweet" })
  tweet: string;

  @Column("int", { name: "userTweetId", nullable: true })
  userTweetId: number | null;

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

  @Column("int", { name: "totalLike", nullable: true })
  totalLike: number | null;

  @Column("int", { name: "totalUnlike", nullable: true })
  totalUnlike: number | null;

  @OneToMany(() => Retweets, (retweets) => retweets.tweetRetweeted)
  retweets: Retweets[];

  @OneToMany(
    () => RetweetsReactions,
    (retweetsReactions) => retweetsReactions.tweet
  )
  retweetsReactions: RetweetsReactions[];

  @ManyToOne(() => Users, (users) => users.tweets, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "userTweetId", referencedColumnName: "id" }])
  userTweet: Users;

  @OneToMany(() => TweetsComments, (tweetsComments) => tweetsComments.tweet)
  tweetsComments: TweetsComments[];

  @OneToMany(() => TweetsReactions, (tweetsReactions) => tweetsReactions.tweet)
  tweetsReactions: TweetsReactions[];
}
