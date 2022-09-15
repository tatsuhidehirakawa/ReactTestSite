type txjsn struct {
    // Table Name:"account_attribute"
    account_id        int         `json: "account_id"`
    update_date       timestamp   `json: "update_date"`
    update_id         string      `json: "update_id"`
    pic_id_01         string      `json: "pic_id_01"`
    skil              string      `json: "skil"`
    // Table Name:"account_master"
    user_id           string      `json: "user_id"`
    account_name      string      `json: "account_name"`
    mail_addless      string      `json: "mail_addless"`
    password          string      `json: "password"`
    zip_code          string      `json: "zip_code"`
    barth_date        timestamp   `json: "barth_date"`
    time_zone         string      `json: "time_zone"`
    language          string      `json: "language"`
    status            string      `json: "status"`
    registration_date string `json: "registration_date"`
}