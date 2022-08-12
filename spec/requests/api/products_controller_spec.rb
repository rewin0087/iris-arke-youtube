require 'rails_helper'

RSpec.describe "Products", type: :request do
  describe "GET /api/products" do
    let!(:product) { create(:product) }
    let(:expected_data) do
      [
        {
          id: product.id,
          name: product.name,
          description: product.description,
          youtube_url: product.youtube_url,
          youtube_id: product.youtube_id,
          image: { url: nil },
          kind: product.kind,
          timecode: product.timecode
        }
      ]
    end

    subject { get '/api/products' }

    it 'is success' do
      subject

      expect(response).to have_http_status :ok

      parsed_data = JSON.parse(response.body, symbolize_names: true)
      data = parsed_data.map { |result| result.except(:created_at, :updated_at) }

      expect(data).to eq(expected_data)
    end
  end
end
