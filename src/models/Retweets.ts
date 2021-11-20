import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Tweets } from "./Tweets";
import { Users } from "./Users";

@Index("tweetRetweetedId", ["tweetRetweetedId"], {})
@Index("userReactedId", ["userReactedId"], {})
@Entity("retweets", { schema: "nuvenz_api" })
export class Retweets {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "tweetRetweetedId", nullable: true })
  tweetRetweetedId: number | null;

  @Column("int", { name: "totalLikes", nullable: true })
  totalLikes: number | null;

  @Column("int", { name: "totalUnlike", nullable: true })
  totalUnlike: number | null;

  @Column("int", { name: "userReactedId", nullable: true })
  userReactedId: number | null;

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

  @ManyToOne(() => Tweets, (tweets) => tweets.retweets, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "tweetRetweetedId", referencedColumnName: "id" }])
  tweetRetweeted: Tweets;

  @ManyToOne(() => Users, (users) => users.retweets, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "userReactedId", referencedColumnName: "id" }])
  userReacted: Users;
}
