# # provider "aws" {
# #   region = "east-us-1"
# # }
# # Define your CloudFront distribution
# resource "aws_cloudfront_distribution" "hirecoder_cloudfront" {
#   # Set the origin for your distribution
#   origin {
#     custom_origin_config {
#       http_port              = 443
#       https_port             = 443
#       origin_protocol_policy = "https-only"
#       origin_ssl_protocols   = ["TLSv1.2"]
#     }
#     domain_name = "hirecoderwebsite.s3.us-east-1.amazonaws.com"
#     origin_id   = "hirecoderwebsite.s3.us-east-1.amazonaws.com"
#   }
#   restrictions {
#     geo_restriction {
#       restriction_type = "whitelist"
#       locations        = ["US", "CA"]
#     }
#   }

#   # Set the default cache behavior for your distribution
#   default_cache_behavior {
#     target_origin_id = "hirecoder"

#     viewer_protocol_policy = "redirect-to-https"

#     allowed_methods = [
#       "GET",
#       "HEAD",
#       "OPTIONS",
#     ]

#     cached_methods = [
#       "GET",
#       "HEAD",
#     ]

#     forwarded_values {
#       query_string = false

#       cookies {
#         forward = "none"
#       }
#     }

#     min_ttl = 0
#     default_ttl = 86400
#     max_ttl = 31536000
#   }

#   # Set the distribution's viewer certificate
#   viewer_certificate {
#     acm_certificate_arn = "arn:aws:acm:us-east-1:123456789012:certificate/abcd1234-abcd-1234-abcd-1234abcd1234"
#     ssl_support_method = "sni-only"
#   }

#   # Set any additional settings for your distribution
#   enabled = true
#   comment = "CloudFront distribution"
# }
