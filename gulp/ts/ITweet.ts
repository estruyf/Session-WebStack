export interface ITweet {
    text: string;
    user: User;
    created_at: Date;
}

export interface User {
    screen_name: string;
    profile_image_url_https: string;
}