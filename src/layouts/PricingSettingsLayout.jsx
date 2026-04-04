import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PricingSettingsLayoutStyles as S } from "../styles/PricingSettingsLayoutStyles";

/**
 * Pricing overview (MFE PricingSettingsPage parity). Checkout / Stripe is not wired on mobile yet.
 */
export function PricingSettingsLayout({ cloudFrontBaseUrl }) {
  const base = String(cloudFrontBaseUrl || "").replace(/\/$/, "");
  const logoUri = base
    ? `${base}/begenone-white-transparent-logo-beta-min.png`
    : null;

  return (
    <ScrollView style={S.scroll} showsVerticalScrollIndicator={false}>
      <View style={S.container}>
        {logoUri ? (
          <Image source={{ uri: logoUri }} style={S.logo} />
        ) : null}

        <Text style={S.title}>
          PRICING BUILT FOR INDIVIDUALS AND BUSINESSES OF ALL SIZES
        </Text>

        <View style={S.planCard}>
          <Text style={S.planName}>AI PREMIUM</Text>

          <View style={S.priceRow}>
            <Text style={S.strikePrice}>$29.99/monthly</Text>
          </View>
          <View style={S.priceRow}>
            <Text style={S.newPrice}>
              $8.99
              <Text style={S.priceSuffix}>/month</Text>
            </Text>
            <Text style={S.offBadge}>(70% off)</Text>
          </View>

          <Text style={S.tagline}>
            AI-powered tools built to improve your content strategy.{"\n"}
            [Draft smarter, analyze performance, and publish with confidence.]
          </Text>

          <Text style={S.helpText}>
            Need help choosing the right plan for your goals?{"\n"}
            Contact us at info@begenone.com
          </Text>

          <FeatureRow
            title="AI INTEGRATION"
            available
          />
          <FeatureRow title="AI Analysis" available />
          <FeatureRow title="AI Recommendation" available />

          <Text style={S.termsNote}>
            Read pricing terms and conditions before subscribing (see
            begenone.com).
          </Text>

          <Text style={S.checkoutNote}>
            Subscription checkout is not available in the app yet. Use the web
            settings flow when you are ready to subscribe.
          </Text>
        </View>

        <View style={S.detailSection}>
          <Text style={S.detailTitle}>LEARN ABOUT AI PREMIUM PLAN</Text>
          <Text style={S.detailHeading}>AI-Driven Premium Membership</Text>
          <Text style={S.detailBody}>
            The Premium plan for BEGENONE is built to help creators and
            businesses grow using AI Integration, AI Analysis, and AI
            Recommendation. Instead of relying on guesswork, members get an
            intelligent drafting system that learns from previous posts, video
            history, and related metadata to support smarter content creation
            from day one.
          </Text>
          <Text style={S.detailBody}>
            The AI drafting workflow can suggest better hooks, structure, and
            direction for your next content by comparing performance trends
            across your existing posts. It also evaluates how each video is
            performing over time, so recommendations are based on real
            engagement signals.
          </Text>
          <Text style={S.detailHighlight}>
            Why this matters: The Premium plan is designed for a wider audience,
            from independent creators to growing teams, by turning content data
            into clear next steps. If new AI features are added during your
            active subscription, you will be able to access them, and you can
            cancel your subscription any time.
          </Text>
        </View>

        <View style={S.detailSection}>
          <Text style={S.detailTitle}>FEATURE&apos;S OVERVIEW</Text>
          <Text style={S.detailHeading}>AI-Powered Premium Membership</Text>

          <InDepthBlock
            title="AI Integration (Available)"
            body="Connect AI-powered tools directly into your creator workflow. Benefit: AI Integration helps you move faster by assisting with drafts, ideas, and repetitive tasks inside the platform."
          />
          <InDepthBlock
            title="AI Analysis (Available)"
            body="Get smart performance insights from your content and audience behavior. Benefit: AI Analysis identifies what is working and where to improve."
          />
          <InDepthBlock
            title="AI Recommendation (Available)"
            body="Receive personalized recommendations for your next best actions. Benefit: AI Recommendation provides practical suggestions for content direction, timing, and audience targeting."
          />
        </View>

        <Pressable
          onPress={() => Linking.openURL("mailto:info@begenone.com")}
          style={{ marginTop: 24, alignSelf: "center" }}
        >
          <Text style={{ color: "#6af", fontSize: 13 }}>info@begenone.com</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

function FeatureRow({ title, available }) {
  return (
    <View style={S.featureRow}>
      <Ionicons
        name="checkmark-circle"
        size={20}
        color="#22c55e"
        style={{ marginRight: 10, marginTop: 2 }}
      />
      <Text style={S.featureText}>
        {title}{" "}
        {available ? (
          <Text style={S.available}>(Available)</Text>
        ) : null}
      </Text>
    </View>
  );
}

function InDepthBlock({ title, body }) {
  return (
    <View style={S.indepthBlock}>
      <Text style={S.indepthTitle}>{title}</Text>
      <Text style={S.indepthP}>{body}</Text>
    </View>
  );
}
