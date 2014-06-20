json.array!(@plans) do |plan|
  json.extract! plan, :id, :contant
  json.url plan_url(plan, format: :json)
end
