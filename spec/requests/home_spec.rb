require 'rails_helper'

RSpec.describe "Homes", type: :request do
  describe "GET /index" do
    subject { get '/' }

    it 'is success' do
      subject

      expect(response).to have_http_status :ok
    end
  end
end
