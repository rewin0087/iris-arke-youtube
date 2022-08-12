FactoryBot.define do
  factory :product do
    name { 'Product A' }
    description  { 'Description' }
    youtube_url { 'https://www.youtube.com/watch?v=I4RynqpahT8' }
    youtube_id { 'I4RynqpahT8' }
    timecode { 10 }
    button_text { 'Play now' }
  end
end
