module PlansHelper
def event_image_small event
  if event['image'] && event['image']['medium']
    image_tag event['image']['medium']['url']
  end
end
end
