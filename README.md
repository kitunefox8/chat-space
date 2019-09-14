# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


# chatspace DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|
### Association
- has_many :groups
- has_many :comments


## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|title|text|null: false|
|text|text|null: false|
|image|text|null: false|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to:user
- has_many :groups
- has_many :comments_times
- has_many  :times,  through:  :comments_times


## timesテーブル
|Column|Type|Options|
|------|----|-------|
|created_at|datetime|null: false|
|update_at|datetime|null: false|
### Association
- has_many :comments_times
- has_many  :comments,  through:  :comments_times


## comments_timesテーブル
|Column|Type|Options|
|------|----|-------|
|comment_id|integer|null: false, foreign_key: true|
|time_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :coment
- belongs_to :time


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|comment_id|integer|null: false, foreign_key: true|
|time_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :comment
- belongs_to :user
- belongs_to :time

