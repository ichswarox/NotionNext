import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Privacy() {
  return (
    <Layout
      title="隐私政策"
      description="我们的隐私政策说明">
      <div className="container margin-vert--lg">
        <Heading as="h1">隐私政策</Heading>
        <p>您的隐私对我们非常重要。本隐私政策旨在说明我们如何收集、使用和保护您的个人信息。</p>
        
        <h2>信息收集</h2>
        <p>我们可能会收集以下类型的个人信息：</p>
        <ul>
          <li>您主动提供的信息（如联系信息、反馈等）</li>
          <li>使用我们服务时自动收集的信息（如IP地址、浏览器类型等）</li>
        </ul>
        
        <h2>信息使用</h2>
        <p>我们可能会将收集的信息用于以下目的：</p>
        <ul>
          <li>提供、维护和改进我们的服务</li>
          <li>回复您的询问和请求</li>
          <li>发送重要通知</li>
        </ul>
        
        <h2>信息保护</h2>
        <p>我们采取适当的安全措施来保护您的个人信息，防止未经授权的访问、使用或泄露。</p>
        
        <h2>联系方式</h2>
        <p>如果您对本隐私政策有任何疑问，请通过以下方式联系我们：</p>
        <ul>
          <li>邮箱：[您的邮箱地址]</li>
        </ul>
      </div>
    </Layout>
  );
}