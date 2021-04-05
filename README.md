# テーブル設計

## users テーブル

| Column     | Type    | Options                  |
| ---------- | ------- | ------------------------ |
| email      | string  | null: false              |
| password   | string  | null: false              |
| name       | string  | null: false              |
| profile    | text    | null: false              |
| number     | integer | null: false, unique:true |

### Association

- has_many :items
- has_many :comments

## items テーブル

| Column      | Type       | Options                        |
| ----------- | ---------- | ------------------------------ |
| pc_name     | string     | null: false                    |
| nickname    | string     | null: false                    |
| about       | text       | null: false                    |
| price       | integer    | null: false                    |
| category_id | integer    | null: false                    |
| start_date  | string     |                                |
| end_date    | string     |                                |
| user        | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- has_many :comments

## comments テーブル

| Column    | Type       | Options                        |
| --------- | ---------- | ------------------------------ |
| text      | text       | null: false                    |
| user      | references | null: false, foreign_key: true |
| items     | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- belongs_to :items
